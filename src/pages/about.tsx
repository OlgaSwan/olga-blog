import React, { FunctionComponent} from "react";
import { PageHeader } from "grommet";

import { Template } from "../components/template";

export const About: FunctionComponent = () => (
    <Template>
        <PageHeader size="small" title="About" margin={{ bottom: "large" }}/>
    </Template>
)