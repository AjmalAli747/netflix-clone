const login_img = document.getElementById("login_img");
const login_details = document.getElementById("login_details");
const header = document.querySelector("header");

login_img.addEventListener("click", () => {
    login_details.classList.toggle("login_pop");
})

window.addEventListener("scroll", () => {
    const windowScroll = window.pageYOffset;

    if(windowScroll > 50){
        header.classList.add("headerBackground");
    }else{
        header.classList.remove("headerBackground");
    }
})

// ******************************** image container with video **********************************************
let video_obj = [
    {
        id : 0,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Ftop-video.mp4?alt=media&token=85ea0317-79b5-436f-9902-56def720a2af",
    },

    {
        id : 1,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%202021s%20Upcoming%20Netflix%20Original%20Films%20%20AbMenuMeinSabNew%20%20Netflix%20India_1080p.mp4?alt=media&token=8810ddbb-e657-49d0-864e-91e4d010460b",
    },


    {
        id : 2,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Ajeeb%20Daastaans%20%20Official%20Trailer%20%20Netflix%20India_1080p.mp4?alt=media&token=b9e2c41d-69d2-4df9-a9af-843fc11ed93d",
    },

    {
        id : 3,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Antim%20The%20Final%20Truth%20Official%20Trailer%20%20Salman%20Khan%20%20Aayush%20Sharma%20%20Releasing%202021_1080p.mp4?alt=media&token=22028f28-e1ce-4d38-b7b1-12d02438f142",
    },

    {
        id : 4,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Anu%20And%20Arjun%20Hindi%20Movie%20Trailer%20%20Vishnu%20Manchu%20%20Kajal%20Aggarwal%20%20Suniel%20Shetty%20%20Navdeep%20Sam%20CS_1080p.mp4?alt=media&token=089bf1e5-5454-4b6b-a1d3-e06a5318ab68",
    },


    {
        id : 5,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Army%20of%20the%20Dead%20%20Hindi%20Trailer%20%20Netflix%20India_1080p.mp4?alt=media&token=7e85e3c7-3e5d-429c-96a7-86a7fd72e20d"
    },

    {
        id : 6,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20BA%20PASS%203%20Official%20Trailer%20%204K%20%20Watch%20Now%20at%20FilmyBOXcom_1080p.mp4?alt=media&token=105b2c22-af21-4c10-b3af-102b97f06aad"
    },

    {
        id : 7,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Ben%2010%20The%20Movie%20Teaser%20Trailer%202021%20Tom%20Holland%20Live%20Action%20%20Concept_1080pFHR.mp4?alt=media&token=9970f089-790e-4964-abf9-9cfaa6002851"
    },

    {
        id : 8,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Cargo%20%20Trailer%20%20Vikrant%20Massey%20Shweta%20Tripathi%20%209%20September_1080p.mp4?alt=media&token=51649460-a6d3-43c7-b231-5e28019d1eaf"
    },

    {
        id : 9,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Choked%20%20Official%20Trailer%20%20Saiyami%20Kher%20Roshan%20Mathew%20Amruta%20Subhash%20Rajshri%20Deshpande%20%20Netflix_1080p.mp4?alt=media&token=a1970b98-fbef-4190-b4c2-82d71cdd55a9"
    },

    {
        id : 10,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Cobra%20Kai%20Season%203%20%20Hindi%20Trailer%20%20Netflix%20India_1080p.mp4?alt=media&token=546e09db-5a7d-47c9-9c14-5ec9c8769d0e"
    },

    {
        id : 11,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20DONT%20BREATHE%202%20%20Official%20Trailer%20HD%20%20Exclusively%20In%20Movie%20Theaters%20August%2013_1080p.mp4?alt=media&token=2356813f-6f54-422e-910f-9e83288549de"
    },

    {
        id : 12,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20FIGHTER%20Official%20Trailer%20%20Hrithik%20Roshan%20%20Deepika%20Padukone%20%20Siddharth%20Anand_1080p.mp4?alt=media&token=82b97d71-c9a8-4b9f-a1b7-7b070f9192a0"
    },

    {
        id : 13,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Feels%20Like%20Ishq%20%20Official%20Trailer%20%20Rohit%20Saraf%20Radhika%20Madan%20Tanya%20Maniktala%20Neeraj%20Madhav_1080p.mp4?alt=media&token=6a925b98-f216-49e9-a628-cd93a6573d33"
    },

    {
        id : 14,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20GODZILLA%20VS%20KONG%20Trailer%202021_1080pFHR.mp4?alt=media&token=e1f8ef23-d2bb-4c4f-8edb-72089324e6fc"
    },

    {
        id : 15,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Haseen%20Dillruba%20%20Official%20Trailer%20%20Taapsee%20Pannu%20Vikrant%20Massey%20Harshvardhan%20Rane%20Netflix%20India_1080p.mp4?alt=media&token=2cb0f562-f2c7-4114-ae19-e72635aeca69"
    },

    {
        id : 16,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Heist%20%20Official%20Trailer%20%20Netflix_1080p.mp4?alt=media&token=288ca35f-a332-42ae-91fd-43d9cca21294"
    },

    {
        id : 17,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Irul%20%20Official%20Trailer%20%20Fahadh%20Faasil%20Soubin%20Shahir%20Darshana%20Rajendran%20%20Malayalam%20Film_1080p.mp4?alt=media&token=f394afe6-6858-40a3-98a8-74f99f13b95a"
    },

    {
        id : 18,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Jagame%20Thandhiram%20%20Hindi%20Trailer%20%20Dhanush%20Aishwarya%20Lekshmi%20%20Karthik%20Subbaraj%20%20Netflix%20India_1080p.mp4?alt=media&token=4d64a258-b999-40d3-a343-7c33d137f604"
    },

    {
        id : 19,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Jamtara%20%20Official%20Trailer%201%20%20Sabka%20Number%20Ayega%20%20Netflix%20India_1080p.mp4?alt=media&token=75bf5a67-ed0a-4b59-94bc-01dbb2e47932"
    },

    {
        id : 20,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Jungle%20Cruise%20Trailer%203%202021%20%20Movieclips%20Trailers_1080p.mp4?alt=media&token=48a79377-adb9-4369-8e8c-e16e6ef14012"
    },

    {
        id : 21,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20KGF%20Chapter2%20TEASER%20YashSanjay%20DuttRaveena%20TandonSrinidhi%20ShettyPrashanth%20NeelVijay%20Kiragandur_1080p.mp4?alt=media&token=415accf6-08c0-44bb-8246-56b8dfbe1121"
    },

    {
        id : 22,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20KRRISH%204%20Official%20Trailer%20%20Hrithik%20Roshan%20%20Priyanka%20Chopra%20%20Rakesh%20Roshan_1080p.mp4?alt=media&token=908dfd69-b73c-4af5-a96e-168f95163fd2"
    },

    {
        id : 23,
        link : "https://firebasestorage.googleapis.com/v0/b/profile-form-bf0d7.appspot.com/o/video-netflix-movies%2Fyt1s.com%20-%20Loki%20%20Official%20Hindi%20Trailer%20%20%E0%A4%B9%E0%A4%A8%E0%A4%A6%20%E0%A4%9F%E0%A4%B0%E0%A4%B2%E0%A4%B0_1080p.mp4?alt=media&token=dbe4fc8e-e6f5-4196-81cb-c89964302175"
    },

    {
        id : 24,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Mahabharat%20%20Trailer%20%20Aamir%20Khan%20%20Hrithik%20Roshan%20%20Prabhas%20%20Deepika%20Padukone%20%20Rajamouli_1080p.mp4?alt=media&token=c6c67db7-60e2-4625-8cd3-1e9243ed9d27"
    },

    {
        id : 25,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Maidaan%20Official%20Trailer%20%20Ajay%20Devgn%20Keerthy%20Suresh%20%20New%20Bollywood%20Movies%202021%20%20Akshay%20Kumar_1080p.mp4?alt=media&token=6a635e70-2a03-4dc5-a70b-329bb0da85f1"
    },

    {
        id : 26,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Masaba%20Masaba%20%20Official%20Trailer%20%20Masaba%20Gupta%20Neena%20Gupta%20%20Netflix%20India_1080p.mp4?alt=media&token=7c0920a4-6a5f-450b-8ad8-4d68e0fb946c"
    },

    {
        id : 27,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Milestone%20%20Official%20Trailer%20%20Ivan%20Ayr%20Suvinder%20Vicky%20Lakshvir%20Saran%20%20Netflix%20India_1080p.mp4?alt=media&token=224667e6-fad4-4d52-991f-0cc5e69cf065"
    },

    {
        id : 28,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20NO%20TIME%20TO%20DIE%20%20Hindi%20Trailer_1080p.mp4?alt=media&token=917b3ca2-9e81-47db-abf5-180359de927d"
    },

    {
        id : 29,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Narappa%20%20Official%20Trailer%20%20Amazon%20Prime%20Video_1080p.mp4?alt=media&token=1e2374b7-aa56-43f7-a842-10930462d1a8"
    },

    {
        id : 30,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Navarasa%20%20Date%20Announcement%20%20Mani%20Ratnam%20Jayendra%20%20Netflix%20India_1080p.mp4?alt=media&token=0ddbed9c-ce5b-40a5-8eea-35d6ef17d693"
    },

    {
        id : 31,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Never%20Have%20I%20Ever%20Season%202%20%20Official%20Hindi%20Trailer%20%20Netflix_1080p.mp4?alt=media&token=e9173fa6-3aa8-4019-989b-5663341ecfca"
    },

    {
        id : 32,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Old%20%20Official%20Trailer%20HD_1080p.mp4?alt=media&token=354aa9e6-767a-4014-ab45-a7ba35de3b1c"
    },

    {
        id : 33,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Pappu%20Pakitmaar%20%20Netflix%20in%20your%20pocket%20at%20199_1080p.mp4?alt=media&token=401758d6-8962-4501-b0ae-294f97e65e29"
    },

    {
        id : 34,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Radhe%20Your%20Most%20Wanted%20Bhai%20%20Official%20Trailer%20%20Salman%20Khan%20%20Prabhu%20Deva%20%20EID%202021_1080p.mp4?alt=media&token=a58d5776-c409-4e18-b3f3-263073c544e9"
    },

    {
        id : 35,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Ray%20%20Official%20Trailer%20%20Manoj%20Bajpayee%20Ali%20Fazal%20Kay%20Kay%20Menon%20%20Harshvarrdhan%20Kapoor_1080p.mp4?alt=media&token=411ac27a-72b9-4a8b-b3d4-459c962a2122"
    },

    {
        id : 36,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Rocketry%20%20HINDI%20Trailer%20%20R%20Madhavan%20Simran%20Bagga_1080p%20-%20Copy.mp4?alt=media&token=c57e62de-b5a2-40fc-b0f8-fdd36c80a430"
    },

    {
        id : 37,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20SHADOW%20AND%20BONE%20Official%20Hindi%20Trailer%202021%20%20Netflix_1080p.mp4?alt=media&token=18de2714-d3cf-45bb-b3ed-0b85893cda8e"
    },

    {
        id : 38,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20SUPERDEEP%20Trailer%202021_1080p.mp4?alt=media&token=3c668d7d-1d38-4760-bc8f-2b5113f3f680"
    },

    {
        id : 39,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Sardar%20Ka%20Grandson%20%20Official%20Trailer%20%20Arjun%20Kapoor%20Neena%20Gupta%20Rakul%20Preet%20Singh%20%20Many%20More_1080p.mp4?alt=media&token=9005fff3-40a1-43d4-a709-4b929e43f8d8"
    },

    {
        id : 40,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Serious%20Men%20%202nd%20Oct%20%20Official%20Trailer%20%20Nawazuddin%20Siddiqui%20M%20Nasser%20Sudhir%20Mishra%20%20Netflix_1080p.mp4?alt=media&token=3b249c57-2300-4f37-b177-f07298cb8b52"
    },

    {
        id : 41,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Sir%20%20Official%20Trailer%20%20Tillotama%20Shome%20%20Vivek%20Gomber%20%20Netflix%20India_1080p.mp4?alt=media&token=d2b85bce-e9e2-4026-8539-afd387a0fe3a"
    },

    {
        id : 42,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Skater%20Girl%20%20Official%20Trailer%20%20Netflix%20India_1080p.mp4?alt=media&token=8de24989-b5f8-433e-996b-9114bc9bf965"
    },

    {
        id : 43,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20State%20of%20Siege%20Temple%20Attack%20%20Official%20Trailer%20%20A%20ZEE5%20Original%20Film%20%20Premieres%209th%20July%20on%20ZEE5_1080p.mp4?alt=media&token=f8004bbf-0fab-4cb1-91fd-f29a505b8958"
    },

    {
        id : 44,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20Sweet%20Girl%20%20Official%20Trailer%20%20Netflix_1080p.mp4?alt=media&token=857c6f2b-9b84-4a77-9161-cedd0551cfc0"
    },

    {
        id : 45,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20THE%20COLONY%20Official%20Trailer%202021_1080p.mp4?alt=media&token=639eaf5a-1cbd-4da6-8c0c-d09d93941463"
    },

    {
        id : 46,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20THOSE%20WHO%20WISH%20ME%20DEAD%20Official%20Trailer%202021_1080p.mp4?alt=media&token=2e471764-08be-4042-a7d7-c2a9362d38ee"
    },

    {
        id : 47,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-website-2e11f.appspot.com/o/netflix-website-video%2Fyt1s.com%20-%20TIGER%203%20Official%20Trailer%20%20Salman%20Khan%20%20Katrina%20Kaif%20%20Emraan%20Hashmi_1080p.mp4?alt=media&token=c1eee984-e6d9-4e15-87bb-27f9b51d64b2"
    },

    {
        id : 48,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20The%20Big%20Bull%20Official%20Trailer%20%20Abhishek%20B%20Ileana%20D%20Nikita%20D%20Sohum%20S%20%20Kookie%20Gulati%20%208th%20April_1080p.mp4?alt=media&token=caa67435-abf9-4b78-8876-edfefa2e3260"
    },

    {
        id : 49,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20The%20Big%20Day%20%20Official%20Trailer%20%20Netflix%20India_1080p.mp4?alt=media&token=e9886863-f183-430f-806d-ad76ee17f9ac"
    },

    {
        id : 50,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20The%20Girl%20On%20The%20Train%20%20Official%20Trailer%20%20Parineeti%20Chopra%20Aditi%20Rao%20Hydari%20%20Kirti%20Kulhari_1080p.mp4?alt=media&token=a3575c4a-dfc9-42cc-bdb4-396eec60add5"
    },

    {
        id : 51,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20The%20Haunting%20of%20Bly%20Manor%20%20Hindi%20Trailer%20%20Netflix%20India_1080p.mp4?alt=media&token=080192e5-8bec-4c2c-a3eb-778312b70339"
    },

    {
        id : 52,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20The%20Midnight%20Sky%20%20George%20Clooney%20%20Final%20Hindi%20Trailer%20%20Netflix%20India_1080p.mp4?alt=media&token=1f3b331d-45c7-4ac5-8458-b2e13d191a7f"
    },

    {
        id : 53,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20The%20Power%20%20Official%20Trailer%20%20Zee%20Plex%20%20Vidyut%20%20Shruti%20%20Mahesh%20Manjrekar%20%2014th%20Jan_1080p.mp4?alt=media&token=f9c1c6a3-4505-4650-95fa-95441d8fe650"
    },

    {
        id : 54,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20The%20Serpent%20%20Official%20Trailer%20%20Netflix_1080p.mp4?alt=media&token=435d9720-81bc-4203-b9c2-21f12923ba7f"
    },

    {
        id : 55,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20Thor%204%20love%20and%20thunder%20Official%20Trailer%20%20new%20movie%202021%20hollywood%20Concept_1080p.mp4?alt=media&token=80b6cc03-d3fc-49d8-8925-e0a45616112e"
    },

    {
        id : 56,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20Trailer%20Madam%20Chief%20Minister%20%20Richa%20Chadha%20%20Subhash%20Kapoor%20%20Bhushan%20Kumar%20%20Releasing%2022%20January_1080p.mp4?alt=media&token=b0cac76b-aeef-447c-9044-1ad347a94945"
    },

    {
        id : 57,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20VENOM%20LET%20THERE%20BE%20CARNAGE%20%20Official%20Hindi%20Trailer%20HD_1080p.mp4?alt=media&token=1d0c1402-b537-45a3-8d52-e09342c89e40"
    },

    {
        id : 58,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20WAR%20Trailer%20%20Hrithik%20Roshan%20Tiger%20Shroff%20Vaani%20Kapoor%20%20Official%20Trailer%20%20New%20Movie%20Trailer_1080p.mp4?alt=media&token=e083ca2a-b5e4-49e4-a178-eed238a8de2a"
    },

    {
        id : 59,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20We%20Can%20Be%20Heroes%20%20Priyanka%20Chopra%20%20Pedro%20Pascal%20%20Official%20Trailer%20%20Netflix%20India_1080p.mp4?alt=media&token=880010eb-cc5f-4481-bc7e-20ce28642443"
    },

    {
        id : 60,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20iron%20man%20unknown%20facts%20%20%20robert%20downey%20jr%20lifestyle%20%20Shocking%20Facts%20About%20Iron%20Man%20%20_1080p.mp4?alt=media&token=4563c786-d2d7-471b-9e4b-63c736d9fc91"
    },

    {
        id : 61,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-%20%E0%A4%8F%E0%A4%95%E0%A4%B8%E0%A4%9F%E0%A4%B0%E0%A4%95%E0%A4%B6%E0%A4%A8%20%E0%A4%B9%E0%A4%A8%E0%A4%A6%20%E0%A4%9F%E0%A4%B0%E0%A4%B2%E0%A4%B0%20%20%E0%A4%95%E0%A4%B0%E0%A4%B8%20%E0%A4%B9%E0%A4%AE%E0%A4%B8%E0%A4%B5%E0%A4%B0%E0%A4%A5%20%20Extraction%20%20Official%20Hindi%20Trailer%20%20Netflix%20India_1080p.mp4?alt=media&token=28f6db4a-5312-45e9-8359-a12baa789c16"
    },

    {
        id : 62,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/yt1s.com%20-Mortal%20Kombat%20Movie%20%20Official%20Hindi%20Trailer_1080p.mp4?alt=media&token=dd1e3cc2-99bb-4a37-9f30-ad22836ef4e8"
    },

    {
        id : 63,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/Attack%20_%20Official%20Concept%20Trailer%20_%20John%20Abraham%20_%20Jacqueline%20Fernandez%20_%20Rakul%20Preet%20Singh%20_Concept.mp4?alt=media&token=5bed147d-aabb-4bbb-b79f-4c81e9765f2d"
    },

    {
        id : 64,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/Liger%20_%20Official%20Concept%20Trailer%20_%20Vijay%20Deverakonda%20_%20Ananya%20pandey%20_%20Puri%20Jagannadh%20_%20K%20Johar.mp4?alt=media&token=fa569df5-9460-40bf-9de2-bf4625980270"
    },

    {
        id : 65,
        link : "https://firebasestorage.googleapis.com/v0/b/netflix-video-upload-here.appspot.com/o/Cold%20Case%202021%20Hindi%20Trailer%20_%20Cold%20Case%20Hindi%20Dubbed%20Full%20Movie%20_%20Cold%20Case%20Hindi%20Promo.mp4?alt=media&token=6bc12503-3b43-40dd-a78a-8d7acc87b17a"
    }
]





let index = 0;
let img_list = document.querySelectorAll(".img_container");
let video_Play = document.getElementById("video_Play");
let video_pop_container = document.querySelector(".video_pop_container");
const times_video = document.getElementById("times_video");

img_list.forEach(elementImg => {
    elementImg.addEventListener("click", () => {
        index = parseInt(elementImg.id);
        video_Play.src = video_obj[index].link;
        video_pop_container.classList.add("active_video_pop");
    })
})

times_video.addEventListener("click", () => {
    video_pop_container.classList.remove("active_video_pop");
    video_Play.pause();
})
