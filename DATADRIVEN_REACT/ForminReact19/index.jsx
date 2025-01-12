import { createRoot } from "react-dom/client";
import { useState } from "react";
// import './styles.css'; // Add a separate CSS file for styling

// Separate the form handling logic
const handleSignUp = async (formData) => {
    try {
        const email = formData.get("email");
        const password = formData.get("password");
        
        // Add basic validation
        if (!email || !password) {
            throw new Error("Please fill in all fields");
        }

        console.log("Form submitted:", { email, password });
        // Here you would typically make an API call to your backend
        
    } catch (error) {
        console.error("Signup error:", error);
        // Handle errors appropriately
    }
    const favColor = formData.get("favColor");
    const checkboxvalues = formData.getAll("condition");
    console.log(favColor);
    console.log(checkboxvalues);
};

const SignUpForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Sign Up
                </h2>
                
                <form 
                    action={async (formData) => {
                        setIsLoading(true);
                        await handleSignUp(formData);
                        setIsLoading(false);
                    }} 
                    className="flex flex-col space-y-4"
                >
                    <div>
                        <label className="block text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="example@email.com"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            minLength="8"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="********"
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Signing up...' : 'Sign Up'}
                    </button>
                    <fieldset className="border p-4 rounded border-gray-300 mt-4">
                        <legend className="px-2 font-semibold">Large Content</legend>
                        <label htmlFor="radio" className="block mb-2">
                            Employee Status :  <input type="radio" name="radio" id="radio" className="mr-2" />
                            </label>
                        <textarea name="tt" id="tet" className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                       <input type="checkbox" name="condition" id="salary" /> I agree to the terms and conditions
                       <input type="checkbox" name="condition" /> hi 
                       <input type="checkbox" name="condition" /> kullasss

                        <div className="bg-black">
                        <select  name="favColor" defaultValue={""} id="favc">
                            <option value="blue">--kulla choose a color kulla--</option>
                            <option value="blue">Blue</option>
                            <option value="black">Black</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>

                        </select>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

// Create and render root
const root = createRoot(document.getElementById("root"));
root.render(<SignUpForm />);