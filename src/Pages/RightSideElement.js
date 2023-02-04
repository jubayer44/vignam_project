import React, { useContext } from 'react';
import { AuthContext } from '../App';
import AboutDivision from './Answers/AboutDivision';
import DivisionIntro from './Answers/DivisionIntro';
import Introduction from './Answers/Introduction';
import KindsOfNoun from './Answers/KindsOfNoun';
import MoneyIntroClass2 from './Answers/MoneyIntroClass2';
import NounIntro from './Answers/NounIntro';
import PluralNumber from './Answers/PluralNumber';
import SimpleSentence from './Answers/SimpleSentence';
import SingularAndPlural from './Answers/SingularAndPlural';
import SingularNumber from './Answers/SingularNumber';
import SpatialUnderstanding from './Answers/SpatialUnderstanding';
import Examples from './Answers/Examples';
import IdentifyingNotes from './Answers/IdentifyingNotes';
import Money from './Answers/Money';
import ReadingTime from './Answers/ReadingTime';
import Rectangle from './Answers/Rectangle';
import Square from './Answers/Square';
import Time from './Answers/Time';
import TimeAndCalender from './Answers/TimeAndCalender';

const RightSideElement = () => {
    const {ansId} = useContext(AuthContext)
    console.log(ansId);
    return (
        <>
        {
            ansId === 1 && <div><Introduction/></div>
        }
        {
            ansId === 2 && <div><SingularNumber/></div>
        }
        {
            ansId === 3 && <div><PluralNumber/></div>
        }
        {
            ansId === 4 && <div><Examples/></div>
        }
        {
            ansId === 5 && <div><SimpleSentence/></div>
        }
        {
            ansId ===  6 && <div><Time/></div>
        }
        {
            ansId ===  7 && <div><TimeAndCalender/></div>
        }
        {
            ansId ===  8 && <div><ReadingTime/></div>
        }
        {
            ansId ===  9 && <div><Money/></div>
        }
        {
            ansId ===  10 && <div><IdentifyingNotes/></div>
        }
        {
            ansId ===  11 && <div><Square/></div>
        }
        {
            ansId ===  12 && <div><Rectangle/></div>
        }
        {
            ansId ===  13 && <div><SingularAndPlural/></div>
        }
        {
            ansId ===  14 && <div><NounIntro/></div>
        }
        {
            ansId ===  15 && <div><KindsOfNoun/></div>
        }
        {
            ansId ===  16 && <div><SpatialUnderstanding/></div>
        }
        {
            ansId ===  17 && <div><DivisionIntro/></div>
        }
        {
            ansId ===  18 && <div><AboutDivision/></div>
        }
        {
            ansId ===  19 && <div><MoneyIntroClass2/></div>
        }
        </>
    );
};

export default RightSideElement;