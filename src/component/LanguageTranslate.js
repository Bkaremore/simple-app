import React,{Component} from 'react';
import {View, Text} from 'react-native';

import I18n,{getLanguages } from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
    en: {
        greeting: 'Hi!',
    },
    'en-GB': {
        greeting: 'Bonjour!',
    },
};

class LanguageTranslate extends Component{

    componentWillMount() {
        getLanguages().then(language =>{
            console.log("language  =>",language)
        })
    }

    render(){
        return(
            <View>
                <Text>{I18n.t('greeting')}</Text>
            </View>
        )
    }
}
export default LanguageTranslate;