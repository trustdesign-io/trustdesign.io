import React from "react";

import { PageFooter, Text, LinkGroup, Icon } from "../";
import Link from "../03_partials/link";

const Footer: React.FC = () => {
  return (
    <PageFooter>
      <Text appearance="body-3" alignment="center" visuallyhidden>
        Connect with us
      </Text>
      <LinkGroup alignment="center">
        <Link
          to="https://x.com/trustdesignio"
          title="Find us on X"
          target="_blank"
        >
          <span className="visually-hidden">X</span>
          <Icon name="x-logo" />
        </Link>
        <Link
          to="https://bsky.app/profile/trustdesignio.bsky.social"
          title="Find us on Bluesky"
          target="_blank"
        >
          <span className="visually-hidden">Bluesky</span>
          <Icon name="bluesky-logo" />
        </Link>
        <Link
          to="https://medium.com/@trustdesignio"
          title="Find us on Medium"
          target="_blank"
        >
          <span className="visually-hidden">Medium</span>
          <Icon name="medium-logo" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/trustdesignio"
          title="Find us on LinkedIn"
          target="_blank"
        >
          <span className="visually-hidden">LinkedIn</span>
          <Icon name="linkedin-logo" />
        </Link>
      </LinkGroup>
    </PageFooter>
  );
};

export default Footer;
