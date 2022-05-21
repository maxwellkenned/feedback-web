import { CloseButton } from '../../CloseButton'

import { feedbackTypes, IFeedbackType } from '..'

interface IFeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: IFeedbackType) => void
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: IFeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex gap-2 w-full py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as IFeedbackType)}
              type="button"
            >
              <img
                className="m-auto"
                src={value.image.source}
                alt={value.image.alt}
              />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
