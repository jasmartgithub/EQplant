import * as React from 'react';
import { observer } from 'mobx-react';
import { DataId, studySetting, demographicQuestions, StudyInputId, TreatmentType, getConversation } from 'src/store';
import { MultipleChoiceQuestion, Header, Paragraph, SubHeader, Prompt, NotAccepted } from 'src/components/common';
import { Messenger } from 'src/components/dialog/Messenger';
import { leftTopBox } from 'src/styles';

export interface IResponseTaskProps {
    addData: (key: DataId, data: string) => void;
    getStudyInput: (key: StudyInputId) => string;
    canSubmit: boolean;
    accepted: boolean;
}

@observer
export class ResponseTask extends React.Component<IResponseTaskProps, void> {
    public render() {
        const { canSubmit, accepted } = this.props;
        return (
            <div className="container">
                <form>
                    <div className="row">{this._renderIntroduction()}</div>
                    {accepted ? (
                        <div>
                            <div className="row">{this._renderTask()}</div>
                            <div className="row">{this._renderSurvey()}</div>
                            <a className="waves-effect waves-light btn" disabled={!canSubmit}>
                                Submit
                            </a>
                        </div>
                    ) : (
                        <NotAccepted />
                    )}
                </form>
            </div>
        );
    }

    private _renderIntroduction() {
        const { compensation, duration } = studySetting;
        return (
            <div>
                <Header>Introduction</Header>
                <Paragraph>
                    Your task is to provide a <i>realistic</i> response to a conversation thread from text messaging
                    communications between two people. Other workers will judge whether your response is appropriate for
                    the conversation. Your task should take {duration} to complete. You will be compensated{' '}
                    {compensation}.
                </Paragraph>

                <SubHeader>Eligibility</SubHeader>
                <Paragraph>
                    Anyone within US is eligible to complete this task. You must have professional or native English
                    proficiency.
                </Paragraph>

                <SubHeader>Data Collection</SubHeader>
                <Paragraph>
                    The data you submit will be anonymized and used solely for research purposes at the University of
                    Washington.
                </Paragraph>
            </div>
        );
    }

    private _renderTask() {
        const { getStudyInput } = this.props;
        const treatmentType = Number(getStudyInput('treatmentType'));
        const treatment = treatmentType !== TreatmentType.None;
        const conversationId = getStudyInput('conversationId');
        const conversation = getConversation(conversationId);
        const { from } = conversation;

        const getHeader = () => {
            if (treatment) {
                return (
                    <div>
                        {' '}
                        <Header>Chat Assistance</Header>
                        <Paragraph>
                            You are using a new chat app to communicate with someone. As you use the app, the chat
                            assistant will help you understand more about your contacts as you chat with them.
                        </Paragraph>
                        <SubHeader>Task</SubHeader>
                    </div>
                );
            } else {
                return (
                    <div>
                        <Header>Task</Header>
                    </div>
                );
            }
        };

        return (
            <div>
                {getHeader()}
                <Paragraph>Imagine you are casually chatting with {from}. </Paragraph>
                <div style={leftTopBox}>
                    <Messenger conversation={conversation} treatmentType={treatmentType} />
                    <div>
                        <Paragraph>Please read the conversation on the left.</Paragraph>
                        <Prompt>Write a realistic and appropriate response given the conversation thread:</Prompt>
                        <textarea
                            placeholder="Your response goes here..."
                            id="response"
                            className="materialize-textarea"
                            onChange={this._onChange.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }

    private _renderSurvey() {
        const { addData } = this.props;
        const questions = demographicQuestions;

        const questionViews = questions.map(question => {
            return (
                <li key={question.name}>
                    <MultipleChoiceQuestion {...question} onSelect={addData} />
                </li>
            );
        });
        return (
            <div>
                <Header>Survey</Header>
                <Paragraph>Please answer a few more questions, and you are all set!</Paragraph>
                <ol className="browser-default">
                    {questionViews}
                    <li>
                        <Prompt required={false}>
                            Do you have any general comment you would like to provide? (optional)
                        </Prompt>
                        <textarea
                            type="text"
                            name="comment"
                            className="materialize-textarea"
                            placeholder="Your comments go here..."
                            onChange={this._onChange.bind(this)}
                        />
                    </li>
                </ol>
            </div>
        );
    }

    private _onChange(event: React.KeyboardEvent<HTMLTextAreaElement>) {
        const { addData } = this.props;
        addData('response', event.currentTarget.value);
    }
}
