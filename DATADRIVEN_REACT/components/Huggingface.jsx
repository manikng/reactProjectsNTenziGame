import Markdown from "react-markdown"
export default function HuggingfaceRecipe(props) {
    return (
        <section ref={props.Ref}  className="ml-3 pl-3 pr-5 pb-3 mb-2">
            <Markdown>{props.Recipe}</Markdown>
        </section>
    )
}