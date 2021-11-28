# Logging Into Firebase

- Download the files from teams week-012 class-2
- Download lab from assessments practical 3






In order to complete the task for the lab due Sunday. You will have to have firebase configured and working with next.js and vercel.

If you do not have it configured please watch the video again. You need to create a file in the root of your project call
```.env.local```. In this file you need to paste in  the keys from the firebase console for the app you setup in the firebase project.

```json
    NEXT_PUBLIC_FIREBASE_API_KEY=your-key-here
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-key-here
    NEXT_PUBLIC_FIREBASE_DATABASE_URL=your-key-here
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-key-here
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-key-here
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-key-here
    NEXT_PUBLIC_FIREBASE_APP_ID=your-key-here
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-key-here
``` 
## CONFIG FILE

```javascript
   const firebaseCredentials = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   }

   export firebaseCredentials
}
```
 