import Nav from "../components/nav";
import "../styles.css";



// 7a66c5a5-5214-4159-b9c4-5bf3eefdac5e



/**
 * Contact:
 * Composant pour afficher la page de contact
 * située sur la route : "/contact".
 * TODO: ajouter le formulaire de contact 
 * ! Utilisation de l'extension Better Comment 
 * ? Cela permet de mettre des couleurs aux commentaires
 */
export default function Contact() {


  return (
    <main className="flex flex-col items-center">
      <Nav />
      <h1 className="text-center mb-8 font-bold text-2xl">Contact</h1>
      <form 
        className="pb-10 mx-auto min-w-1/3"
        action="https://api.web3forms.com/submit" 
        method="POST"
      >
          
      <input type="hidden" name="access_key" value="7a66c5a5-5214-4159-b9c4-5bf3eefdac5e" />
        
          <div className="pb-12 border-b border-gray-900/10">
            <h2 className="text-base font-semibold leading-7">Fell free to contact me</h2>
            <p className="mt-1 text-sm leading-6 text-slate-200">Fill this form to reach me, I'll be happy to answer you in a few days.</p>
            <div className="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="mt-10 sm:col-span-3">
                <label htmlFor="subject" className="block text-sm font-medium leading-6 text-slate-200">Subject</label>
                <div className="mt-2">
                  <select id="subject" name="subject" autoComplete="subject-name" className="block w-full rounded-md border-0 text-gray-900 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Meet me</option>
                    <option>Hire me</option>
                    <option>Get a quote</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-4">
                              <label
                                  htmlFor="lastname"
                                  className="block text-sm font-medium leading-6 text-slate-200"
                              >
                                  Lastname
                              </label>
                              <div className="mt-2">
                                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                      <input
                                          type="text"
                                          name="lastname"
                                          id="lastname"
                                          required
                                          autoComplete="lastname"
                                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                          placeholder="Smith"
                                      />
                                  </div>
                              </div>
                          </div>
                          <div className="sm:col-span-4">
                              <label
                                  htmlFor="firstname"
                                  className="block text-sm font-medium leading-6 text-slate-200"
                              >
                                  Firstname
                              </label>
                              <div className="mt-2">
                                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                      <input
                                          type="text"
                                          name="firstname"
                                          id="firstname"
                                          required
                                          autoComplete="firstname"
                                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                          placeholder="Jane"
                                      />
                                  </div>
                              </div>
                          </div>
                          <div className="sm:col-span-4">
                              <label
                                  htmlFor="email"
                                  className="block text-sm font-medium leading-6 text-slate-200"
                              >
                                  Your e-mail
                              </label>
                              <div className="mt-2">
                                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                      <input
                                          type="email"
                                          name="email"
                                          id="email"
                                          autoComplete="email"
                                          required
                                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                          placeholder="jane@smith.com"
                                      />
                                  </div>
                              </div>
                          </div>
                          <div className="sm:col-span-3">
                              <label
                                  htmlFor="message"
                                  className="block text-sm font-medium leading-6 text-slate-200"
                              >
                                  Message
                              </label>
                              <div className="mt-2">
                                  <textarea
                                      id="message"
                                      name="message"
                                      rows={3}
                                      className="block w-full text-gray-900 rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      defaultValue={''}
                                  />
                              </div>
                          </div>
                          <div className="sm:col-span-4">
                              <input
                                  id="comments"
                                  name="comments"
                                  type="checkbox"
                                  required
                                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                              />
                              <label
                                  htmlFor="lastname"
                                  className="pl-2 text-sm leading-6 text-slate-200"
                              >
                                  I accept the terms and conditions available <a href="#" className="text-indigo-600 underline">here</a>.
                              </label>
                          </div>
                      </div>
                  </div>
                  <div className="flex items-center gap-x-6">
                      <button
                          type="button"
                          className="text-sm font-semibold leading-6 text-slate-200"
                      >
                          Reset
                      </button>
                      <button
                          type="submit"
                          className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#ffffff" d="M3 20V4l19 8M5 17l11.85-5L5 7v3.5l6 1.5l-6 1.5M5 17V7v6.5Z"/></svg>
                      </button>
                  </div>
            
      </form>
    </main>
  );
}