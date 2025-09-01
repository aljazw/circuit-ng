# Circuit Admin (Angular + Ionic)

This project is a **simple Angular + Ionic application** 

## ✨ Features

- **Firebase Authentication**: Login & Register users
- **Multi-language support**: Switch between English, Slovenian, French, and German
- **Responsive UI**: Works on web and mobile (Ionic)

## 🛠️ Tech Stack

- [Angular](https://angular.io/) – Frontend framework
- [Ionic](https://ionicframework.com/) – Mobile-first UI components
- [Firebase](https://firebase.google.com/) – Authentication & Firestore
- TypeScript
- HTML / SCSS

## 📂 Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:your-username/circuit-ng.git
cd circuit-ng
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.  
2. Install AngularFire and Firebase in your project:

```bash
ng add @angular/fire
```
4. During setup, choose your Firebase project and select the features you need (Authentication, Firestore, Hosting, etc.).

5. Replace your src/environments/environment.ts with your Firebase config:
```ts
export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};
```

### 4. Run the development server
```bash
ng serve
```

## 🤝 Contributing

This is a demo project and is not intended for adding new features, but you are free to fork it and use it as your own.

## 📄 License

This project is licensed under the [MIT License](LICENSE).