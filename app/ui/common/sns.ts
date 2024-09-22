// on
import YoutubeOn from '@/public/icons/sns-youtube-on.svg';
import InstagramOn from '@/public/icons/sns-instagram-on.svg';
import FacebookOn from '@/public/icons/sns-facebook-on.svg';
import LinkedinOn from '@/public/icons/sns-linkedin-on.svg';
import DiscordOn from '@/public/icons/sns-discord-on.svg';
import BehanceOn from '@/public/icons/sns-behance-on.svg';
import GithubOn from '@/public/icons/sns-github-on.svg';
//on-clicked
import YoutubeOnClicked from '@/public/icons/sns-youtube-on-clicked.svg';
import InstagramOnClicked from '@/public/icons/sns-instagram-on-clicked.svg';
import FacebookOnClicked from '@/public/icons/sns-facebook-on-clicked.svg';
import LinkedinOnClicked from '@/public/icons/sns-linkedin-on-clicked.svg';
import DiscordOnClicked from '@/public/icons/sns-discord-on-clicked.svg';
import BehanceOnClicked from '@/public/icons/sns-behance-on-clicked.svg';
import GithubOnClicked from '@/public/icons/sns-github-on-clicked.svg';
//off
import YoutubeOff from '@/public/icons/sns-youtube-off.svg';
import InstagramOff from '@/public/icons/sns-instagram-off.svg';
import FacebookOff from '@/public/icons/sns-facebook-off.svg';
import LinkedinOff from '@/public/icons/sns-linkedin-off.svg';
import DiscordOff from '@/public/icons/sns-discord-off.svg';
import BehanceOff from '@/public/icons/sns-behance-off.svg';
import GithubOff from '@/public/icons/sns-github-off.svg';
//off-clicked
import YoutubeOffClicked from '@/public/icons/sns-youtube-off-clicked.svg';
import InstagramOffClicked from '@/public/icons/sns-instagram-off-clicked.svg';
import FacebookOffClicked from '@/public/icons/sns-facebook-off-clicked.svg';
import LinkedinOffClicked from '@/public/icons/sns-linkedin-off-clicked.svg';
import DiscordOffClicked from '@/public/icons/sns-discord-off-clicked.svg';
import BehanceOffClicked from '@/public/icons/sns-behance-off-clicked.svg';
import GithubOffClicked from '@/public/icons/sns-github-off-clicked.svg';

export const snsIcons: {
  [key: string]: { [key2: string]: { [key3: string]: any } };
} = {
  youtube: {
    on: { normal: YoutubeOn, clicked: YoutubeOnClicked },
    off: { normal: YoutubeOff, clicked: YoutubeOffClicked },
  },
  instagram: {
    on: { normal: InstagramOn, clicked: InstagramOnClicked },
    off: { normal: InstagramOff, clicked: InstagramOffClicked },
  },
  facebook: {
    on: { normal: FacebookOn, clicked: FacebookOnClicked },
    off: { normal: FacebookOff, clicked: FacebookOffClicked },
  },
  linkedin: {
    on: { normal: LinkedinOn, clicked: LinkedinOnClicked },
    off: { normal: LinkedinOff, clicked: LinkedinOffClicked },
  },
  discord: {
    on: { normal: DiscordOn, clicked: DiscordOnClicked },
    off: { normal: DiscordOff, clicked: DiscordOffClicked },
  },
  behance: {
    on: { normal: BehanceOn, clicked: BehanceOnClicked },
    off: { normal: BehanceOff, clicked: BehanceOffClicked },
  },
  github: {
    on: { normal: GithubOn, clicked: GithubOnClicked },
    off: { normal: GithubOff, clicked: GithubOffClicked },
  },
};
