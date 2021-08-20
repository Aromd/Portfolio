import React, {useState} from 'react'
import { useForm } from '../../hooks/useForm';
import { PrimaryButton } from '../ui/ButtonElements';
import { ContactContainer, ContactTitle, ContactWrapper, FormContainer, NameInput, EmailInput, MessageInput, MessageSent } from './ContactElements';
import emailjs from 'emailjs-com';
import TypeWritter from '../../helpers/TypeWritter';

interface DataForm {
    user_name: string;
    user_email: string;
    message: string;
}

const textSent = "Mensaje enviado... Gracias por ponerte en contacto!";

// const serviceId = process.env.YOUR_SERVICE_ID!;
// const templateId = process.env.YOUR_TEMPLATE_ID!;
// const userID = process.env.YOUR_USER_ID!;

const Contact:React.FC = () => {

    const [sent, setSent] = useState(false);

    const {values, handleInputChange, reset} = useForm<DataForm>({
        user_name: "",
        user_email: "",
        message: ""
    });

    const { user_name, user_email, message } = values;

    const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm( "service_bleugba", "template_068jtg8", e.target, "user_x4PMNlDCALf3O5zqFm4y6")
        .then((result) => {
            console.log(result.text);
            reset();
            setSent(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    const cleanMessage = () => {
        sent && 
        setTimeout(() => {
            setSent(false);
        }, 2500);
    }

    return (
        <ContactWrapper id="contact">
            <ContactContainer>
                <ContactTitle>
                <h2>Contacto</h2>
                </ContactTitle>
                <FormContainer>
                    <form onSubmit={sendEmail}>
                        <NameInput>
                            <label>Nombre</label>
                            <input 
                                type="text" 
                                placeholder="Ej: Juan" 
                                name="user_name"
                                value= {user_name}
                                onChange={handleInputChange}
                                onFocus={cleanMessage}
                                autoComplete="off"
                                required
                                />
                            <div></div>
                        </NameInput>
                        <EmailInput>
                            <label htmlFor="">Email</label>
                            <input 
                                type="email" 
                                placeholder="Ej: juan@gmail.com"
                                name="user_email"
                                value= {user_email}
                                onChange={handleInputChange}
                                onFocus={cleanMessage}
                                autoComplete="off"
                                required/>
                            <div></div>
                        </EmailInput>
                        <MessageInput>
                            <label htmlFor="">Mensaje</label>
                            <textarea 
                                name="message" 
                                id="" 
                                cols={30} 
                                rows={10} 
                                placeholder="Escribime..." 
                                onChange={handleInputChange} 
                                value={message}
                                onFocus={cleanMessage} 
                                required></textarea>
                            <div></div>
                        </MessageInput>
                        
                        {sent && <MessageSent>
                            <TypeWritter text={textSent} tag={""} speed={45} setAnimationStatus={setSent} style={{textAlign: "center"}}/>
                        </MessageSent>}
                        <PrimaryButton colorType={"contact"} style={{position: "absolute", bottom: 0}} type="submit">
                            Enviar
                        </PrimaryButton>
                    </form>
                </FormContainer>
            </ContactContainer>
        </ContactWrapper>
    )
}

export default Contact;
