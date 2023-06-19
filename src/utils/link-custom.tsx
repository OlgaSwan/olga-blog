import React, {FunctionComponent} from "react";
import { Anchor, AnchorProps } from "grommet";
import { Link, LinkProps } from "react-router-dom";
import isAbsoluteUrl from "is-absolute-url";

type LinkCustomProps = Omit<AnchorProps & LinkProps, 'as' | 'to'> & {
    href: string
}

export const LinkCustom: FunctionComponent<LinkCustomProps> = props => (
    isAbsoluteUrl(props.href) ? (
        <Anchor {...props} />
    ) : (
        //@ts-ignore
        <Anchor as={Link} to={props.href} {...props} />
    )    
)