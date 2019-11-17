/* eslint-disable no-alert, no-console */
import React from 'react';
import I18N from './../local'

export default class BaseComponent extends React.Component {
    getString(key){
        return I18N.t(key);
    }
}