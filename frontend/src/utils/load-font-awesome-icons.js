import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretDown, faCaretRight, faChevronCircleDown, faChevronCircleUp,
  faChevronDown, faChevronUp, faCircle, faCircleQuestion, faCode,
  faEllipsisH, faExclamation, faHistory, faListUl,
  faPlusCircle, faSpinner, faTags, faUser, faUserEdit,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub, faGitlab, faBitbucket,
} from '@fortawesome/free-brands-svg-icons';

// app
library.add(faExclamation, faSpinner, faCode, faListUl);

// v-resizer
library.add(faCaretRight);

// v-summary
library.add(faExclamation);

// v-summary-charts
library.add(
    faChevronUp,
    faChevronDown,
    faCircleQuestion,
    faDatabase,
    faUser,
    faCode,
    faListUl,
    faCircle,
    faGithub,
    faGitlab,
    faBitbucket,
);

// v-zoom
library.add(faTags, faEllipsisH);

// v-authorship
library.add(faCaretDown, faCaretRight, faHistory, faUserEdit);

// v-segment
library.add(faPlusCircle, faChevronCircleUp, faChevronCircleDown);
