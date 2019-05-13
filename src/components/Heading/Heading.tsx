import React, { Component } from 'react';
import classnames from 'classnames';
import { HtmlH, HtmlHProps, hLevels } from '../../reset/HtmlH/HtmlH';
export { hLevels };

export interface HeadingProps extends HtmlHProps {
  variant: hLevels;
  className?: string;
}

const baseClassName = 'fi-heading';

export class Heading extends Component<HeadingProps> {
  render() {
    const { className, variant = 'h1', ...passProps } = this.props;
    return (
      <HtmlH
        {...passProps}
        className={classnames(baseClassName, className)}
        as={variant}
      />
    );
  }
}