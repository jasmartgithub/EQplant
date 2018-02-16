export interface IMessage {
    received: boolean;
    content: string;
}

export interface IConversation {
    id: number;
    messages: IMessage[];
    from: string;
    to: string;
    anger: boolean;
    highConfidence: boolean;
}

export const getConversation = (conversationId: number) => {
    return conversations.filter(conv => conv.id === conversationId)[0];
};

const conversations: IConversation[] = [
    {
        id: 1,
        from: 'David',
        to: 'Alex',
        anger: false,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Sorry man, this is taking super long. You can start without me if you want'
            },
            {
                received: true,
                content: 'What the fuck dude'
            },
            {
                received: false,
                content: 'I said I’m sorry lol you can chill for liek 5 minutes i’ll be there with the chicken nuggets'
            },
            {
                received: true,
                content: 'They’d better not get cold :P'
            }
        ]
    },
    {
        id: 2,
        from: 'Mom',
        to: 'Alex',
        anger: true,
        highConfidence: true,
        messages: [
            {
                received: true,
                content: 'Did you forget to take out the trash?'
            },
            {
                received: false,
                content: 'oops'
            },
            {
                received: true,
                content: 'There are ants all over your kitchen! I didn’t raise you to be like this'
            }
        ]
    },
    {
        id: 3,
        from: 'Paula',
        to: 'Unknown',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Did you just hear about the layoffs?'
            },
            {
                received: true,
                content:
                    'I didn’t JUST hear about it. I heard about it first thing this morning, because I got laid off. Looks like you got lucky.'
            }
        ]
    },
    {
        id: 4,
        from: 'John',
        to: 'Unknown',
        anger: true,
        highConfidence: true,
        messages: [
            {
                received: true,
                content: 'Did you tell Jane about me drinking last night?'
            },
            {
                received: false,
                content: 'What? You mean she found out?'
            },
            {
                received: true,
                content: 'SOMEONE told her. Shit. she’s pissed. I’m pissed at whoevr told her'
            }
        ]
    },
    {
        id: 5,
        from: 'Teri',
        to: 'Unknown',
        anger: true,
        highConfidence: true,
        messages: [
            {
                received: true,
                content: 'Did you know that Dave was planning to break up with me on Valentine’s Day?'
            },
            {
                received: false,
                content: 'Omg im so sorry'
            },
            {
                received: true,
                content: 'That asshole! I found out accidentally but now i don’t know what i wanna do'
            }
        ]
    },
    {
        id: 6,
        from: 'Jess',
        to: 'Unknown',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'I just walked past someone who dressed like you at the Starbucks by work'
            },
            {
                received: true,
                content: 'Wow, stalker'
            },
            {
                received: false,
                content: 'It was you?! I thought you gave up coffee'
            },
            {
                received: true,
                content: 'Forgive my sins'
            }
        ]
    },
    {
        id: 7,
        from: 'Paula',
        to: 'Unknown',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Did you just hear about the layoffs?'
            },
            {
                received: true,
                content:
                    'I didn’t JUST hear about it. I heard about it first thing this morning, because I got laid off. Looks like you got lucky.'
            }
        ]
    },
    {
        id: 8,
        from: 'Paula',
        to: 'Unknown',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Did you just hear about the layoffs?'
            },
            {
                received: true,
                content:
                    'I didn’t JUST hear about it. I heard about it first thing this morning, because I got laid off. Looks like you got lucky.'
            }
        ]
    },
    {
        id: 9,
        from: 'Paula',
        to: 'Unknown',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Did you just hear about the layoffs?'
            },
            {
                received: true,
                content:
                    'I didn’t JUST hear about it. I heard about it first thing this morning, because I got laid off. Looks like you got lucky.'
            }
        ]
    },
    {
        id: 10,
        from: 'Paula',
        to: 'Unknown',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Did you just hear about the layoffs?'
            },
            {
                received: true,
                content:
                    'I didn’t JUST hear about it. I heard about it first thing this morning, because I got laid off. Looks like you got lucky.'
            }
        ]
    },
    {
        id: 11,
        from: 'Paula',
        to: 'Unknown',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Did you just hear about the layoffs?'
            },
            {
                received: true,
                content:
                    'I didn’t JUST hear about it. I heard about it first thing this morning, because I got laid off. Looks like you got lucky.'
            }
        ]
    },
    {
        id: 12,
        from: 'Paula',
        to: 'Unknown',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Did you just hear about the layoffs?'
            },
            {
                received: true,
                content:
                    'I didn’t JUST hear about it. I heard about it first thing this morning, because I got laid off. Looks like you got lucky.'
            }
        ]
    },
    {
        id: 13,
        from: 'Paula',
        to: 'Unknown',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Did you just hear about the layoffs?'
            },
            {
                received: true,
                content:
                    'I didn’t JUST hear about it. I heard about it first thing this morning, because I got laid off. Looks like you got lucky.'
            }
        ]
    },
    {
        id: 14,
        from: 'Paula',
        to: 'Unknown',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Did you just hear about the layoffs?'
            },
            {
                received: true,
                content:
                    'I didn’t JUST hear about it. I heard about it first thing this morning, because I got laid off. Looks like you got lucky.'
            }
        ]
    },
    {
        id: 15,
        from: 'Paula',
        to: 'Alex',
        anger: true,
        highConfidence: false,
        messages: [
            {
                received: false,
                content: 'Did you just hear about the layoffs?'
            },
            {
                received: true,
                content:
                    'I didn’t JUST hear about it. I heard about it first thing this morning, because I got laid off. Looks like you got lucky.'
            }
        ]
    },
    {
        id: '4',
        from: 'Jess',
        to: 'Alex',
        anger: false,
        highConfidence: true,
        messages: [
            {
                received: false,
                content: 'I just walked past someone who dressed like you at the Starbucks by work'
            },
            {
                received: true,
                content: 'Wow, stalker'
            },
            {
                received: false,
                content: 'It was you?! I thought you gave up coffee'
            },
            {
                received: true,
                content: 'Forgive my sins'
            }
        ]
    },
    {
        id: '5',
        from: 'John',
        to: 'Alex',
        anger: true,
        highConfidence: true,
        messages: [
            {
                received: true,
                content: 'Did you tell Jane about me drinking last night?'
            },
            {
                received: false,
                content: 'What? You mean she found out?'
            },
            {
                received: true,
                content: 'SOMEONE told her. Shit. she’s pissed. I’m pissed at whoevr told her'
            }
        ]
    },
    {
        id: '6',
        from: 'Ruby',
        to: 'Alex',
        anger: false,
        highConfidence: true,
        messages: [
            {
                received: true,
                content: 'Are we still on for tonight?'
            },
            {
                received: false,
                content: 'Idk. feeling not very sociable right now'
            },
            {
                received: true,
                content: 'You did this last week too! What’s going on really? Are you okay?'
            }
        ]
    }
];
