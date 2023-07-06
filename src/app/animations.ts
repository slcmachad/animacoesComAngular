import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '2px solid #B2B6FF'
  })),
  state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('default => highlighted', [
    animate('200ms ease-in-out',style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ]),
])

export const shownStateTrigger = trigger('shownState', [
  state('notShown', style({

  })),
  state('shown', style({

  })),
  transition('notShoun => shoun', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ])
])
