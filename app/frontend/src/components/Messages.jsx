import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCards from './maindashboard/StatsCards';
import Matches from './Matches';
import PeerConnections from './PeerConnections';
import DashboardHeader from './DashboardHeader';

const Messages = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here (e.g., clear auth token)
    navigate('/login');
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto">
                  {/* Header */}
                  <DashboardHeader />
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Centered Welcome Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-6 flex flex-col items-center">
          <h1 className="text-5xl font-bold font-['Poppins'] text-gray-800 mb-6">
          My Messages / Chats
          </h1>
          <p className="text-2xl font-normal font-['Poppins'] text-gray-800 mb-8">
          Real Talk with Real People on the Same Path.
                    </p>

                    <p className="text-3xl font-bold font-['Poppins'] text-slate-800 mb-8 text-left self-start">
                    Chat with Buddy (Name)                    </p>

                    <div data-layer="Frame 1686562766" className="Frame1686562766 self-stretch px-6 pt-6 pb-40 rounded-tr-[32px] rounded-bl-[32px] outline outline-[5px] outline-offset-[-5px] outline-teal-600 inline-flex justify-center items-center gap-40 flex-wrap content-center">
   
    <div data-layer="Frame 1686562767" className="Frame1686562767 size- flex justify-start items-center gap-40">
        <div data-layer="Comment/Left" className="CommentLeft w-80 px-8 py-6 bg-sky-100 rounded-tr-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
            <div data-layer="Hey! Looks like we’re both in the marketing track — I’m Malik. Just joined JobBuddies last week 😊" className="HeyLooksLikeWeReBothInTheMarketingTrackIMMalikJustJoinedJobbuddiesLastWeek self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Hey! Looks like we’re both in the Business Analysis track — I’m Malik. Just joined JobBuddies last week 😊</div>
            <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
        </div>
        <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-amber-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
            <div data-layer="Hi Malik! I’m Priya. Nice to meet you! Always great to connect with someone in the same field." className="HiMalikIMPriyaNiceToMeetYouAlwaysGreatToConnectWithSomeoneInTheSameField self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide"> Hi Malik! I’m Priya. Nice to meet you! Always great to connect with someone in the same field.</div>
            <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
        </div>
    </div>
    <div data-layer="Frame 1686562768" className="Frame1686562768 size- flex justify-start items-center gap-40">
        <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-amber-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
            <div data-layer="Totally! I’ve been deep in job apps lately — it's a bit of a grind. How's your search going?" className="TotallyIVeBeenDeepInJobAppsLatelyItSABitOfAGrindHowSYourSearchGoing self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide"> Totally! I’ve been deep in job apps lately — it's a bit of a grind. How's your search going?</div>
            <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
        </div>
        <div data-layer="Comment/Left" className="CommentLeft w-80 px-8 py-6 bg-sky-100 rounded-tr-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
            <div data-layer="Pretty much the same. Had a couple of rejections last week, but trying to stay focused. We got this 💪" className="PrettyMuchTheSameHadACoupleOfRejectionsLastWeekButTryingToStayFocusedWeGotThis self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Pretty much the same. Had a couple of rejections last week, but trying to stay focused. We got this 💪</div>
            <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
        </div>
    </div>
    <div data-layer="Frame 1686562769" className="Frame1686562769 size- flex justify-start items-center gap-40">
        <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-gray-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
            <div data-layer="Absolutely. Oh — I came across this great Notion template for tracking job apps. Want me to send it?" className="AbsolutelyOhICameAcrossThisGreatNotionTemplateForTrackingJobAppsWantMeToSendIt self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide"> Absolutely. Oh — I came across this great Notion template for tracking job apps. Want me to send it?</div>
            <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
        </div>
        <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-amber-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
            <div data-layer="Yes, please! I’ve been using a messy Google Sheet so I’d love a better system 😅" className="YesPleaseIVeBeenUsingAMessyGoogleSheetSoIDLoveABetterSystem self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Yes, please! I’ve been using a messy Google Sheet so I’d love a better system 😅</div>
            <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
        </div>
    </div>
    <div data-layer="Frame 1686562770" className="Frame1686562770 size- flex justify-start items-center gap-40">
        <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-sky-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
            <div data-layer="Here you go: [Notion link]       Also, not sure if you’ve seen this, but SkillHat is offering free Masterclasses for Digital Content Strategist; looks like a great fit for you." className="HereYouGoNotionLinkAlsoNotSureIfYouVeSeenThisButSkillhatIsOfferingFreeMasterclassesForDigitalContentStrategistLooksLikeAGreatFitForYou self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide"> Here you go: [Notion link]       Also, not sure if you’ve seen this, but SkillHat is offering free Masterclasses for Digital Content Strategist; looks like a great fit for you.</div>
            <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
        </div>
        <div data-layer="Comment/Right" className="CommentRight w-80 px-8 py-6 bg-amber-100 rounded-tl-[32px] rounded-bl-[32px] rounded-br-[32px] inline-flex flex-col justify-start items-center gap-2">
            <div data-layer="Ahhh, I love SkillHat. Thank you! I’ll apply tonight 🙌" className="AhhhILoveSkillhatThankYouILlApplyTonight self-stretch justify-center text-gray-600 text-2xl font-semibold font-['Poppins'] leading-loose tracking-wide">Ahhh, I love SkillHat. Thank you! I’ll apply tonight 🙌</div>
            <div data-layer="02:06 PM, Sat" className="06PmSat self-stretch justify-center text-slate-400 text-sm font-medium font-['Poppins'] leading-tight tracking-tight">02:06 PM, Sat</div>
        </div>
    </div>
</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Messages;
