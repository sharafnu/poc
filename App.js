/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import Onboarding from './screens/onboarding/Onboarding';


export default class App extends Component {
  render() {
    const Pages = [
            {
                title: 'Welcome',
                subtitle: 'to the Oxford Union app. Here you can browse the term card and engage with the Union, all in one place.'
            },
            {
                title: 'Get Engaged',
                subtitle: 'The Oxford Union app integrates closely with Facebook. Don\'t worry, we won\'t post anything to your profile.',
                action: {
                    title: "Login to Facebook",
                    onPress: this.showFacebookLogin
                }
            },
            {
                title: "Great",
                subtitle: "That's all for now. As you use the app, we'll learn about the events you like and use this to personalize your experience.",
                action: {
                    title: "Let's Get Started",
                    onPress: this.finishOnboarding
                }
            }
    ];
    return (
        <Onboarding
            backgroundImage={require('./assets/images/bg.png')}
            pages={Pages}
        />
    );
}
}
