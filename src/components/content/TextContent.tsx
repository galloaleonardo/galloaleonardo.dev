import { Language } from "../../enums/Language";

interface Props {
    language: string
}

export default function TextContent({ language }: Props) {
    
    const getEnglishText = (): JSX.Element => {
        return (
            <div>
                <p>Hey there, folks! 🤘</p>  
                I'm a software developer with {Number(new Date().getFullYear()) - 2016} years of experience and, like every self-respecting programmer, I'm passionate about <s>coffee</s> beer and the terminal.
                On a daily basis, I work extensively with back-end development using <strong>NodeJS</strong> and <strong>Typescript</strong> stacks. I also have a good understanding of relational and non-relational databases, which allows me to build more robust and scalable solutions.
                Furthermore, I love working with cloud infrastructure, especially AWS and Terraform, which enable me to create and manage increasingly complex environments in a simple and efficient manner.
                But don't be fooled into thinking I'm just a back-end developer! I can also hold my own with front-end development and whenever necessary, lend a hand in building beautiful and responsive interfaces.
                <p>Anyway, that's me. I'm a guy who loves challenges and is always looking to learn new things. Oh, and don't forget the <s>coffee</s> beer 🍻!</p>
            </div>
        )
    }

    const getPortugueseText = (): JSX.Element => {
        return (
            <div>
                <p>E aí, gente boa! 🤘</p> 
                Eu sou um desenvolvedor de software com {Number(new Date().getFullYear()) - 2016} anos de experiência e, como todo programador que se preze, sou apaixonado por <s>café</s> cerveja e pelo terminal.
                No meu dia a dia, trabalho bastante com o desenvolvimento de back-end utilizando as stacks <strong>NodeJS</strong> e <strong>Typescript</strong>. Também tenho um bom conhecimento em bancos de dados relacionais e não relacionais, o que me permite construir soluções mais robustas e escaláveis.
                Além disso, eu adoro trabalhar com infraestrutura cloud, em especial a AWS e o Terraform, que me permitem criar e gerenciar ambientes cada vez mais complexos de forma simples e eficiente.
                Mas, não se engane achando que eu sou só um desenvolvedor de back-end! Também sei me virar bastante com o front-end e sempre que necessário dou uma ajudinha para construir interfaces bonitas e responsivas.
                <p>Enfim, é isso aí. Sou um cara que gosta de desafios e está sempre em busca de aprender coisas novas. Ah, e não esqueça do <s>café</s> cerveja 🍻!</p>
            </div>
        )
    }
    
    return (
        <>
            <div className='text-justify text-base px-7 lg:pt-24 lg:px-5' data-testid='text-content'>
                {language === Language.EN ? getEnglishText() : getPortugueseText()}
                
            </div>
        </>
    );
}