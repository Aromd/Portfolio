import React from 'react'
import { useForm } from '../../hooks/useForm';
import { PrimaryButton } from '../ui/ButtonElements';
import { ContactContainer, ContactTitle, ContactWrapper, FormContainer, NameInput, EmailInput, MessageInput } from './ContactElements';

interface DataForm {
    name: string;
    email: string;
}

const Contact:React.FC = () => {

    const {values, handleInputChange} = useForm<DataForm>({
        name: "",
        email: ""
    });

    const { name, email } = values;

    return (
        <ContactWrapper id="contact">
            <ContactContainer>
                <ContactTitle>
                <h2>Contacto</h2>
                </ContactTitle>
                <FormContainer>
                    <form action="">
                        <NameInput>
                            <label>Nombre</label>
                            <input 
                                type="text" 
                                placeholder="Ej: Juan" 
                                name="name"
                                value= {name}
                                onChange= {handleInputChange}
                                required/>
                            <div></div>
                        </NameInput>
                        <EmailInput>
                            <label htmlFor="">Email</label>
                            <input 
                                type="email" 
                                placeholder="Ej: juan@gmail.com" 
                                name="email"
                                value= {email}
                                onChange= {handleInputChange}
                                required/>
                            <div></div>
                        </EmailInput>
                        <MessageInput>
                            <label htmlFor="">Mensaje</label>
                            <textarea name="" id="" cols={30} rows={10} placeholder="Escribime..." required></textarea>
                            <div></div>
                        </MessageInput>
                        <PrimaryButton colorType={"contact"} style={{position: "absolute", bottom: 0}}>
                            Enviar
                        </PrimaryButton>
                    </form>
                </FormContainer>
            </ContactContainer>
        </ContactWrapper>
    )
}

export default Contact;
