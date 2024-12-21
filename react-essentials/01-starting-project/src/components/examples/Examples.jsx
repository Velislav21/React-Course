import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "../Section";
import TabButton from "../TabButton";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState('')

    function clickHandler(selectedButton) {
        setSelectedTopic(selectedButton);

    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }

    return (
        <Section id="examples" >
            <h2>Examples</h2>
            <menu>
                <TabButton onClick={() => clickHandler('components')}>Components</TabButton>
                <TabButton onClick={() => clickHandler('jsx')}>JSX</TabButton>
                <TabButton onClick={() => clickHandler('props')}>Props</TabButton>
                <TabButton onClick={() => clickHandler('state')}>State</TabButton>
            </menu>
            {tabContent}
        </Section>
    )
}