import { MdQuiz, MdQuestionAnswer } from "react-icons/md";


export default {
  type: 'object',
  name: 'visualiser',
  title: 'Visualiser',
  groups: [

    {
      name: 'question',
      title: 'Question',
      icon: MdQuiz,
      default: true, 
    },
    {
      name: 'answer',
      title: 'Answer',
      icon: MdQuestionAnswer,
    },
  ],
  fields: [
    {
      name: 'question',
      group: 'question',
      type: 'portableText',
      title: 'Question',
    },
    {
      name: 'header',
      group: 'question',
      type: 'portableText',
      title: 'Header',
    },
    {
      name: 'answer',
      group: 'answer',
      type: 'portableText',
      title: 'Answer',
    },
    {
      name: 'buttons',
      group: 'answer',
      type: 'array',
      title: 'Buttons',
      of: [
        { title: 'Button', type: 'button', }],
    },
    {
      name: 'social',
      group: 'answer',
      type: 'array',
      of: [
        {
          title: 'Social Channel',
          type: 'reference',
          to: [
            { type: 'socialMedia' }
          ],
        }
      ]
    },

  ],
  preview: {
    prepare() {

      return {
        title: 'Icon Visualise',
        subtitle: 'Icons used to visualise amounts of money.',
      };
    },
  },
};
