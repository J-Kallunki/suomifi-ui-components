import { css } from 'styled-components';
import { withSuomifiTheme, SuomifiThemeComponent } from '../theme';
import { ButtonProps } from './Button';
import { element, focus, button } from '../theme/reset';

const fullWidthStyles = css`
  display: block;
  width: 100%;
`;

const negativeStyles = ({ theme }: SuomifiThemeComponent) => css`
  &.fi-button--negative {
    background: none;
    background-color: ${theme.colors.highlightBase};
    border: 1px solid ${theme.colors.whiteBase};
    text-shadow: none;

    &:hover {
      background: ${theme.gradients.whiteBaseNegative};
    }

    &:active {
      background: none;
      background-color: ${theme.colors.highlightBase};
    }

    &.fi-button--disabled,
    &[disabled],
    &:disabled {
      opacity: 0.5;
      background-color: ${theme.colors.highlightBase};
    }
  }
`;

const secondary = ({ theme }: SuomifiThemeComponent) => css`
  color: ${theme.colors.highlightBase};
  background: none;
  background-color: ${theme.colors.whiteBase};
  border: 1px solid ${theme.colors.highlightBase};
  text-shadow: none;

  &:hover {
    background: ${theme.gradients.depthLight26};
  }

  &:active {
    background: none;
    background-color: ${theme.colors.highlightLight53};
  }

  &.fi-button--disabled,
  &[disabled],
  &:disabled {
    color: ${theme.colors.depthBase};
    text-shadow: none;
    background: none;
    background-color: ${theme.colors.highlightLight53};
    border-color: ${theme.colors.depthBase};
  }
`;

const secondaryStyles = ({ theme }: SuomifiThemeComponent) => css`
  &.fi-button--secondary {
    ${secondary({ theme })}
  }
`;

const secondaryNoBorderStyles = ({ theme }: SuomifiThemeComponent) => css`
  &.fi-button--secondary-noborder {
    ${secondary({ theme })}
    border: none;
  }
`;

const tertiaryStyles = ({ theme }: SuomifiThemeComponent) => css`
  &.fi-button--tertiary {
    ${secondary({ theme })}
    background: ${theme.colors.highlightLight50};
    border: none;

    &:hover {
      background: ${theme.colors.highlightLight53};
    }

    &:active {
      background: ${theme.colors.highlightLight53};
    }
  }
`;

export const baseStyles = withSuomifiTheme(
  ({
    theme,
    fullWidth = false,
  }: SuomifiThemeComponent & Partial<ButtonProps>) => css`
  ${button({ theme })}
  padding: ${theme.spacing.s} ${theme.spacing.m};
  min-height: 40px;
  color: ${theme.colors.whiteBase};
  background: ${theme.gradients.highlightBase};
  border-radius: ${theme.radius.basic};
  text-align: center;
  text-shadow: ${theme.shadows.invertTextShadow};
  cursor: pointer;

  &:hover {
    background: ${theme.gradients.highlightLight4};
  }

  &:active {
    background: ${theme.gradients.highlightDark9};
  }

  &.fi-button--disabled,
  &[disabled],
  &:disabled {
    text-shadow: 0 1px 1px ${theme.colors.blackBase};
    background: ${theme.gradients.depthBase};
    pointer-events: none;
    user-select: none;
  }

  ${fullWidth && fullWidthStyles}
  ${negativeStyles({ theme })}
  ${secondaryStyles({ theme })}
  ${secondaryNoBorderStyles({ theme })}
  ${tertiaryStyles({ theme })}

  & > .fi-button_icon {
    width: 16px;
    height: 16px;
    margin-right: ${theme.spacing.s};
    vertical-align: middle;
    transform: translateY(-0.1em);
    &.fi-button_icon--right {
      margin-right: 0;
      margin-left: ${theme.spacing.s};
    }
  }
`,
);

export const unStyled = withSuomifiTheme(
  ({ theme }: SuomifiThemeComponent) => css`
  ${element({ theme })}
  ${focus({ theme })}
  border-radius: ${theme.radius.basic};
  cursor: pointer;
`,
);
