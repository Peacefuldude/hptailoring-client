import React from 'react';

// Styles
import styles from './timeLine.module.css'

const TimeLine = () => {
    return ( 
        <div>
            <ul>
        <span className={styles.timeLineYears}>1914</span><p>- Born in Cresco, Iowa</p>
        <span className={styles.timeLineYears}>1933</span><p>- Leaves his family's farm to attend the University of Minnesota, thanks to a Depression era program known as the "National Youth Administration"</p>
        <span className={styles.timeLineYears}>1935</span><p>- Has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans. "I saw how food changed them", he said. "All of this left scars on me."</p>
        <span className={styles.timeLineYears}>1937</span><p>- Finishes university and takes a job in the US Forestry Service</p>
        <span className={styles.timeLineYears}>1938</span><p>- Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school study under Stakman, who teaches him about breeding pest-resistent plants.</p>
        <span className={styles.timeLineYears}>1941</span><p>- Tries to enroll in the military after the Pearl Harbor attack, but is rejected. Instead, the military asked his lab to work on waterproof glue, DDT to control malaria, disinfectants, and other applied science.</p>
        <span className={styles.timeLineYears}>1942</span><p>- Receives a Ph.D. in Genetics and Plant Pathology</p>
        <span className={styles.timeLineYears}>1944</span><p>- Rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major climate on Earth.</p>
        <span className={styles.timeLineYears}>1945</span><p>- Discovers a way to grown wheat twice each season, doubling wheat yields</p>
        <span className={styles.timeLineYears}>1953</span><p>- crosses a short, sturdy dwarf breed of wheat with a high-yeidling American breed, creating a strain that responds well to fertilizer. It goes on to provide 95% of Mexico's wheat.</p>
        <span className={styles.timeLineYears}>1962</span><p>- Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help mitigate mass starvation due to a rapidly expanding population</p>
        <span className={styles.timeLineYears}>1970</span><p>- receives the Nobel Peace Prize</p>
        <span className={styles.timeLineYears}>1983</span><p>- helps seven African countries dramatically increase their maize and sorghum yields</p>
        <span className={styles.timeLineYears}>1984</span><p>- becomes a distinguished professor at Texas A&M University</p>
        <span className={styles.timeLineYears}>2005</span><p>- states "we will have to double the world food supply by 2050." Argues that genetically modified crops are the only way we can meet the demand, as we run out of arable land. Says that GM crops are not inherently dangerous because "we've been genetically modifying plants and animals for a long time. Long before we called it science, people were selecting the best breeds."</p>
        <span className={styles.timeLineYears}>2009</span><p>- dies at the age of 95.</p>
      </ul>
        </div>
     );
}
 
export default TimeLine;