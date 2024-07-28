import Accordion from 'react-bootstrap/Accordion';
import "./Education.css"
export default function Education(props){
    return(
        <div className="Education">
            <h5 id="education">My Education & Expierence</h5>
            <h1 className="EducationHeading">EDUCATION</h1>
            <Accordion defaultActiveKey="0" className="Accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="AccHeader">Masters of Business Administration - Symbiosis</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Developed expertise in business analysis, data management, and IT project management.</li>
            <li>Conducted research and projects on emerging technologies and their applications in business.</li>
            <li>Gained hands-on experience with various IT tools and platforms, enhancing technical and analytical skills.</li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Bacherlors of Engineering</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Acquired in-depth knowledge of programming languages such as Javascript, C++, and Python.</li>
            <li>Participated in workshops and seminars on emerging technologies, enhancing understanding of industry trends and innovations.</li>
            <li>Actively involved in technical clubs and competitions, fostering teamwork and problem-solving skills.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <h1 className="EducationHeading">EXPIERENCE</h1>
    <Accordion defaultActiveKey="0" className="Accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>API Integration Lead (<i>Dec 2022- Present</i>)</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Conducted in-depth requirement analysis and coordinated with cross-functional teams to ensure successful API integrations.</li>
            <li>Employed API analytics tools to uncover market trends and drive data-informed decisions.</li>
            <li>Enhanced client satisfaction by delivering innovative API solutions tailored to business objectives.</li>
            <li>Played a key role in strategic initiatives, contributing to a 40% increase in client satisfaction by providing insights and solutions that exceeded client expectations</li>
            <li>Designed and implemented advanced API integration solutions to optimize data management processes.</li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sector Specialist - IT Infra (<i>Apr 2021- Dec 2022</i>)</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Oversaw and optimized sector-related operations and team performance using advanced IT systems and tools.</li>
            <li>Conducted in-depth research and analysis leveraging IT tools to uncover sector trends, potential growth sectors, and crucial insights, driving data-informed actions.</li>
            <li>Created management reports using IT analytics tools on team performance and identified opportunities for improvement, fostering a culture of continuous enhancement and growth.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    )
}