import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "../Section";
import TabButton from "../TabButton";
import Tabs from "../Tabs";

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
        <Section title="Examples" id="examples" >
            <Tabs
            ButtonsContainer="menu"
            buttons={
                <>
                    <TabButton onSelect={() => clickHandler('components')}>Components</TabButton>
                    <TabButton onSelect={() => clickHandler('jsx')}>JSX</TabButton>
                    <TabButton onSelect={() => clickHandler('props')}>Props</TabButton>
                    <TabButton onSelect={() => clickHandler('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>

        </Section>
    )
}