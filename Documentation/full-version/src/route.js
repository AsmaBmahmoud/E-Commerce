import React from 'react';

const Landing = React.lazy(() => import('./Demo/Landing/index'));
const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const SignUp2 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp2'));
const SignUp3 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp3'));
const SignUp4 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp4'));
const SignUp5 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp5'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const Signin2 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn2'));
const Signin3 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn3'));
const Signin4 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn4'));
const Signin5 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn5'));
const ResetPassword1 = React.lazy(() => import('./Demo/Authentication/ResetPassword/ResetPassword1'));
const ResetPassword2 = React.lazy(() => import('./Demo/Authentication/ResetPassword/ResetPassword2'));
const ResetPassword3 = React.lazy(() => import('./Demo/Authentication/ResetPassword/ResetPassword3'));
const ResetPassword4 = React.lazy(() => import('./Demo/Authentication/ResetPassword/ResetPassword4'));
const ResetPassword5 = React.lazy(() => import('./Demo/Authentication/ResetPassword/ResetPassword5'));
const ChangePassword = React.lazy(() => import('./Demo/Authentication/ChangePassword'));
const PersonalInfo = React.lazy(() => import('./Demo/Authentication/PersonalInfo'));
const ProfileSettings = React.lazy(() => import('./Demo/Authentication/ProfileSettings'));
const MapForm = React.lazy(() => import('./Demo/Authentication/MapForm'));
const Subscribe = React.lazy(() => import('./Demo/Authentication/Subscribe'));
const Error = React.lazy(() => import('./Demo/Maintenance/Error'));
const OfflineUI = React.lazy(() => import('./Demo/Maintenance/OfflineUI'));
const ComingSoon = React.lazy(() => import('./Demo/Maintenance/ComingSoon'));

const route = [
    { path: '/landing', exact: true, name: 'Landing Page', component: Landing },
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/signup-2', exact: true, name: 'Signup 2', component: SignUp2 },
    { path: '/auth/signup-3', exact: true, name: 'Signup 3', component: SignUp3 },
    { path: '/auth/signup-4', exact: true, name: 'Signup 4', component: SignUp4 },
    { path: '/auth/signup-5', exact: true, name: 'Signup 5', component: SignUp5 },
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/auth/signin-2', exact: true, name: 'Signin 2', component: Signin2 },
    { path: '/auth/signin-3', exact: true, name: 'Signin 3', component: Signin3 },
    { path: '/auth/signin-4', exact: true, name: 'Signin 4', component: Signin4 },
    { path: '/auth/signin-5', exact: true, name: 'Signin 5', component: Signin5 },
    { path: '/auth/reset-password-1', exact: true, name: 'Reset Password 1', component: ResetPassword1 },
    { path: '/auth/reset-password-2', exact: true, name: 'Reset Password 2', component: ResetPassword2 },
    { path: '/auth/reset-password-3', exact: true, name: 'Reset Password 3', component: ResetPassword3 },
    { path: '/auth/reset-password-4', exact: true, name: 'Reset Password 4', component: ResetPassword4 },
    { path: '/auth/reset-password-5', exact: true, name: 'Reset Password 5', component: ResetPassword5 },
    { path: '/auth/change-password', exact: true, name: 'Change Password', component: ChangePassword },
    { path: '/auth/personal-information', exact: true, name: 'Personal Information', component: PersonalInfo },
    { path: '/auth/profile-settings', exact: true, name: 'Profile Settings', component: ProfileSettings },
    { path: '/auth/map-form', exact: true, name: 'Map Form', component: MapForm },
    { path: '/auth/subscribe', exact: true, name: 'Subscribe', component: Subscribe },
    { path: '/maintenance/error', exact: true, name: 'Error', component: Error },
    { path: '/maintenance/coming-soon', exact: true, name: 'Coming Soon', component: ComingSoon },
    { path: '/maintenance/offline-ui', exact: true, name: 'Offline UI', component: OfflineUI },
];

export default route;