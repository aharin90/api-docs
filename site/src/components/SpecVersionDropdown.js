import React from 'react'; 

export default function SpecVersionDropdown(props) {
  function versionChange(e){
    window.location.href = e.target.value
  }

  return (
      <div className='spec_version_dropdown'>
          <form className='DropDownContainer'>
              <label for="VersionList">Version:</label>
              <select id='VersionList' onChange={(e) => versionChange(e)}>
                  {props.options.map(option => ( option.title == props.default ? 
                      <option className='ListItem' value={option.link} selected>{option.title}</option> : <option className='ListItem' value={option.link}>{option.title}</option>
                  ))}
              </select>
          </form>
      </div>
  );
}