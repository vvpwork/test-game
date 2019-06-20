import React, {Component} from 'react'

// components
import FormSubmit from './FormSubmit'
import EnterYourName from './EnterYourName'
import SelectGameMode from './SelectGameMode'


export default class FormSubmit extends Component{
state = {

}

    render(){
        return(
            <form onSubmit = {}> 
                <SelectGameMode /> 
                <EnterYourName />
                <FormSubmit />
            </form>
        )
    }
};


