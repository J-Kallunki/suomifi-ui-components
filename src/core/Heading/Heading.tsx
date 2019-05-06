import React, { Component } from 'react';
import styled from '@emotion/styled';
import { withDefaultTheme } from '../theme/utils/defaultTheme';
import { ThemeComponent, ColorProp } from '../theme';
import {
  Heading as CompHeading,
  HeadingProps as CompHeadingProps,
  hLevels,
} from '../../components/Heading/Heading';
import { baseStyles } from './Heading.baseStyles';
import classnames from 'classnames';
import { Omit } from '../../utils/typescript';

const baseClassName = 'fi-heading';
const smallScreenClassName = `${baseClassName}--small-screen`;

export interface HeadingProps
  extends Omit<CompHeadingProps, 'variant'>,
    ThemeComponent {
  variant: hLevels | 'h1hero';
  smallScreen?: boolean;
  color?: ColorProp;
}

const StyledHeading = styled(
  ({
    theme,
    color,
    smallScreen,
    className,
    variant,
    ...passProps
  }: HeadingProps) => (
    <CompHeading
      {...passProps}
      className={classnames(className, [`${baseClassName}--${variant}`], {
        [smallScreenClassName]: smallScreen,
      })}
      variant={variant === 'h1hero' ? 'h1' : variant}
    />
  ),
)`
  ${props => baseStyles(props)};
`;

/**
 * Used displaying headings with correct fonts
 */
export class Heading extends Component<HeadingProps> {
  static h1hero = (props: HeadingProps) => (
    <StyledHeading {...withDefaultTheme(props)} variant="h1hero" />
  );

  static h1 = (props: HeadingProps) => (
    <StyledHeading {...withDefaultTheme(props)} variant="h1" />
  );

  static h2 = (props: HeadingProps) => (
    <StyledHeading {...withDefaultTheme(props)} variant="h2" />
  );

  static h3 = (props: HeadingProps) => (
    <StyledHeading {...withDefaultTheme(props)} variant="h3" />
  );

  static h4 = (props: HeadingProps) => (
    <StyledHeading {...withDefaultTheme(props)} variant="h4" />
  );

  static h5 = (props: HeadingProps) => (
    <StyledHeading {...withDefaultTheme(props)} variant="h5" />
  );

  static h6 = (props: HeadingProps) => (
    <StyledHeading {...withDefaultTheme(props)} variant="h6" />
  );

  render() {
    const passProps = withDefaultTheme(this.props);
    return <StyledHeading {...passProps} />;
  }
}
