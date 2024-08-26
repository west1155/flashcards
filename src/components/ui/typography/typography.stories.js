import { Typography } from './index';
const meta = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: [
                'H1',
                'H2',
                'H3',
                'Subtitle1',
                'Subtitle2',
                'Body1',
                'Body2',
                'overline',
                'caption',
                'caption-link',
                'link1',
                'link2',
                'Error'
            ],
            control: { type: 'radio' },
        },
    },
};
export default meta;
export const H1 = {
    args: {
        variant: 'h1',
        children: 'Heading 1',
    },
};
export const H2 = {
    args: {
        variant: 'h2',
        children: 'Heading 2',
    },
};
export const H3 = {
    args: {
        variant: 'h3',
        children: 'Heading 3',
    },
};
export const Subtitle1 = {
    args: {
        variant: 'subtitle1',
        children: 'Subtitle 1',
    },
};
export const Subtitle2 = {
    args: {
        variant: 'subtitle2',
        children: 'Subtitle 2',
    },
};
export const Body1 = {
    args: {
        variant: 'body1',
        children: 'Body 1',
    },
};
export const Body2 = {
    args: {
        variant: 'body2',
        children: 'Body 2',
    },
};
export const Overline = {
    args: {
        variant: 'overline',
        children: 'OVERLINE',
    },
};
export const Caption = {
    args: {
        variant: 'caption',
        children: 'Caption'
    }
};
export const CaptionLink = {
    args: {
        variant: 'caption-link',
        children: 'Caption Link',
    }
};
export const SubtitleLink = {
    args: {
        variant: 'link1',
        children: 'Subtitle link',
    }
};
export const Link = {
    args: {
        variant: 'link2',
        children: 'Link',
    }
};
export const Error = {
    args: {
        as: 'div',
        variant: 'error',
        children: 'Error',
    }
};
