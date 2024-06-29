export const login_bg_image="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const logo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const YOUTUBE_LINK = "https://www.youtube.com/embed/"
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"
export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
  };
export const SUPPORTED_LANGUAGES = [{identifier : "en", value : "English"}, {identifier : "hindi", value : "Hindi"}, {identifier : "urdu", value : "Urdu"}]
export const GPT_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key="
export const LOGIN_PAGE_CONTENT = [
  {
    heading : "Enjoy on your TV",
    paragraph : "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    img : "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    imgVideo : "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
  },
  {
    heading : "Download your shows to watch offline",
    paragraph : "Save your favourites easily and always have something to watch.",
    img : "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    imgVideo : ""
  },
  {
    heading : "Watch everywhere",
    paragraph : "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    img : "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    imgVideo : "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
  },
  {
    heading : "Create profiles for kids",
    paragraph : "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    img : "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d",
    imgVideo : ""
  },
  {
    heading : "Full entertainment in free time",
    paragraph : "Watch your favourites and always have something to watch.",
    img : "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    imgVideo : ""
  },
]