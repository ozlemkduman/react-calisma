function About(){
    let company={
        name: "Efe",
        lastName:"Polat",
        since:33,
    }
  return(
    <p> 
        {company.name} {company.lastName} Bu siteyi {company.since} yaşında açmıştır.
    </p>
  )
}

export default About;