"use client";

import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineReddit } from "react-icons/ai";
import { FaPinterestP, FaWhatsapp, FaTelegram } from "react-icons/fa";

export const socials = [
  {
    SOCIAL_SHARE_LINK: "https://twitter.com/intent/tweet?url=",
    Icon: BsTwitter,
    includeText: true,
  },
  {
    SOCIAL_SHARE_LINK: "https://www.facebook.com/sharer/sharer.php?u=",
    Icon: BsFacebook,
    includeText: false,
  },
  {
    SOCIAL_SHARE_LINK: "https://www.linkedin.com/shareArticle?mini=true&url=",
    Icon: BsLinkedin,
    includeText: false,
  },
  {
    SOCIAL_SHARE_LINK: "https://pinterest.com/pin/create/button/?url=",
    Icon: FaPinterestP,
    includeText: false,
  },
  {
    SOCIAL_SHARE_LINK: "https://www.reddit.com/submit?url=",
    Icon: AiOutlineReddit,
    includeText: false,
  },
  {
    SOCIAL_SHARE_LINK: "https://api.whatsapp.com/send?text=",
    Icon: FaWhatsapp,
    includeText: true,
  },
  {
    SOCIAL_SHARE_LINK: "https://t.me/share/url?url=",
    Icon: FaTelegram,
    includeText: false,
  },
];
