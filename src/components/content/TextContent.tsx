import { Language } from "../../enums/Language";

interface Props {
    language: string
}

export default function TextContent({ language }: Props) {
    
    const getEnglishText = (): JSX.Element => {
        return (
            <div>
                About {Number(new Date().getFullYear()) - 2016} years ago I started my journey with the good old Delphi/Pascal developing desktop applications for ERP systems.
                Later, I built robust applications with PHP, Vue.js, SQL Server and realized that web development would be my focus where I would demand time and dedication.
                Today, although I like front-end, I focus on back-end development with Typescript and NodeJS. Even though I focus on specific technologies, I have a generalist view from the development point, where I have studied and implemented small projects in GoLang and Python.
                I've had experience in many different projects, from conventional applications like REST APIs to serverless applications like AWS Lambda. I've used some relational databases (like MySQL, SQL Server, AWS Aurora) and non-relational databases (like MongoDB and AWS DynamoDB).
                The cloud service present in my day-to-day life is Amazon AWS. In general, after a while of experience, I can identify the type of service that can solve my problem, but I recognize that I still have a lot to learn. Besides infrastructure, I take some risks with Infrastructure as a Code like Terraform.
                I am aware that the day to day life of a software engineer is not only about code. You have to communicate with excellence, give visibility to your work and treat the people around you well. Feedbacks should be part of the whole process.
                Speaking of communication, I speak Portuguese (BR) natively and have a good level of English to the point that I can communicate in a non-confusing way.
            </div>
        )
    }

    const getPortugueseText = (): JSX.Element => {
        return (
            <div>
                Há cerca de {Number(new Date().getFullYear()) - 2016} anos comecei a minha viagem com o bom e velho Delphi/Pascal a desenvolver aplicações desktop para sistemas ERP.
                Mais tarde, construí aplicações robustas com PHP, Vue.js, SQL Server e percebi que o desenvolvimento web seria o meu foco onde exigiria tempo e dedicação.
                Hoje em dia, embora goste de front-end, concentro-me no desenvolvimento de back-end com Typescript e NodeJS. Apesar de me concentrar em tecnologias específicas, tenho uma visão generalista do ponto de vista do desenvolvimento, onde estudei e implementei pequenos projectos em GoLang e Python.
                Tive experiência em muitos projectos diferentes, desde aplicações convencionais como REST APIs até aplicações sem servidor como AWS Lambda. Utilizei algumas bases de dados relacionais (como MySQL, SQL Server, AWS Aurora) e bases de dados não relacionais (como MongoDB e AWS DynamoDB).
                O serviço de nuvem presente no meu dia-a-dia é o Amazon AWS. Em geral, após algum tempo de experiência, consigo identificar o tipo de serviço que pode resolver o meu problema, mas reconheço que ainda tenho muito a aprender. Para além da infra-estrutura, corro alguns riscos com a infra-estrutura como um código como o Terraform.
                Estou ciente de que o dia-a-dia de um engenheiro de software não se resume ao código. Tem de comunicar com excelência, dar visibilidade ao seu trabalho e tratar bem as pessoas à sua volta. Os feedbacks devem fazer parte de todo o processo.
                Por falar em comunicação, falo português (BR) nativamente e tenho um bom nível de inglês ao ponto de poder comunicar de uma forma não confusa.
            </div>
        )
    }
    
    return (
        <>
            <div className='text-justify text-base px-7 lg:px-5' data-testid='text-content'>
                {language === Language.EN ? getEnglishText() : getPortugueseText()}
                
            </div>
        </>
    );
}