// Import FontAwesome core
import { library, config } from '@fortawesome/fontawesome-svg-core';

// Import brand icons
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

// Import solid icons
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faPaperPlane,
  faUser,
  faTag,
  faChevronDown,
  faComment,
  faCircleCheck,
  faCircleExclamation,
  faSpinner,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

// Prevent FontAwesome from adding its CSS automatically since we handle styling
config.autoAddCss = false;

// Add all icons to the library
library.add(
  // Brand icons
  faFacebookF,
  faInstagram,
  faYoutube,
  faXTwitter,
  // Solid icons
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faPaperPlane,
  faUser,
  faTag,
  faChevronDown,
  faComment,
  faCircleCheck,
  faCircleExclamation,
  faSpinner,
  faBuilding,
);
