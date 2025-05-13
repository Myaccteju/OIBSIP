Firebase Authentication Web App
This is a modern, responsive web application built with HTML, CSS, and JavaScript that provides user registration, login, and password recovery functionality using Firebase Authentication and Firestore. It also features a styled UI and a redirect to a homepage after successful login.

Overview
This project demonstrates a basic authentication flow for users:

-Register using email and password
-Log in with email and password
-Recover a forgotten password
-Store user profile information (first name, last name, email) in Firestore
-Toggle password visibility
-Responsive and animated UI

After successful authentication, users are redirected to a custom homepage.html.

Features
-Firebase Authentication integration
-Firebase Firestore database for user details
-Custom styled form with animations
-Error and success message handling
-Password reset functionality
-Password visibility toggle
-Responsive layout
-Login status persistence via localStorage

Pages
-Sign In / Register Page
    -Users can toggle between registration and login forms
    -Input validations and inline messages for success and errors
    -Social icons (Google/Facebook) for future OAuth integration

-Homepage
    -Redirects after login
    -Accessible only to authenticated users (optional)

-Technologies Used
    -HTML5
    -CSS3 with animations and effects
    -JavaScript (ES6+)
    -Firebase v10
        -Authentication
        -Firestore Database
    -Font Awesome for icons

Setup Instructions
-Clone this repository:
    -git clone https: (https://github.com/Myaccteju/OIBSIP/blob/main/TASK4)
cd your-repo-name

-Install Firebase via CDN (already included in HTML and JS files)

-Replace Firebase configuration in firebaseauth.js with your own:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

-Make sure your Firebase project has Authentication (Email/Password) and Firestore Database enabled in the Firebase Console.

-Run the app by simply opening index.html in a browser or using a local web server (like Live Server in VS Code).

-File Structure
├── index.html           # Login and Register UI
├── homepage.html        # Redirect after login
├── style.css            # Styling for the forms and layout
├── firebaseauth.js      # Firebase initialization and export
├── script.js            # Form logic and authentication functions
