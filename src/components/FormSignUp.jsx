import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebaseConfig";

// Schéma de validation avec yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email('le format de l\'email est invalide')
    .required('L\'email est obligatoire'),
    password: yup
      .string()
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
      .required('le mot de passe est obligatoire'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre')
      .required('La confirmation du mot de passe est obligatoire'),
});

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    
    try {
      // on crée un utilisateur avec son email et son mot de passe 
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      // on recupère l'uid de l'utilisateur crée
      const user = userCredential.user;
      console.log('Utilisateur inscrit :', user);

      //ajout des informations supplémentaires sur l'utilisateur dans firestore
      await setDoc(doc(db, "users", user.uid), {
        email: data.email,
        createdAt: new Date(),
        // On ajoute d'autres information selon le besoin
      });

      console.log("Information utilisateur ajouté dans firestore");
      // réinitialisation du formulaire
      reset();
      
    } catch (error){
      console.error('Erreur lors de l\'inscription :', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-5">
      <div className="min-w-[70%] flex flex-col gap-2">
        <label htmlFor="email" className="text-white pl-5 font-bold">Email :</label>
        <input 
          type="email"
          id="email" 
          {...register('email')}
          className="rounded-xl pl-5 text-blue-900 bg-slate-400"
          placeholder="Votre email" 
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="min-w-[70%] flex flex-col gap-2">
        <label htmlFor="password">Mot de passe</label>
        <input 
          type="password"
          id="password" 
          {...register('password')}
          className="rounded-xl pl-5 text-blue-900 bg-slate-400"
          placeholder="Votre mot de passe" 
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      <div className="min-w-[70%] flex flex-col gap-2">
        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <input 
          type="password"
          id="confirmPassword" 
          {...register('confirmPassword')}
          className="rounded-xl pl-5 text-blue-900 bg-slate-400" 
          placeholder="Confirmez votre mot de passe" 
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="border p-2 rounded-full bg-slate-500 text-white font-bold">
        {isSubmitting ? 'Inscription en cours....' : 'S\'inscrire'}
      </button>
    </form>
  );
};

export default FormSignUp;
