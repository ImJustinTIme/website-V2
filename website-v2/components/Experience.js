
import CardHeader from "./util/CardHeader";
import LinkButton from "./util/LinkButton";

const Experience = () => {

  return (
    <div className={'experienceParent'}>
      
      <div className={'schoolTextGroup'}>
        <CardHeader headerText={"School"} />
        <div>
          <div>
            Graduated From Iowa State in 2020 With a degree in Computer
            Engineering
          </div>
          <div className={'buttonSpace'}>
          <LinkButton link={'/projects'} text={'View School Projects'}/>
          </div>
        </div>
      </div>
      <div className={''}>
        </div>
    </div>
  );
};

export default Experience;
