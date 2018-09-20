//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import logo from './Good.jpg';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tmemberemotion: '',
      teamsemotion:'',
      messageFromServer: '',
      modalIsOpen: false
    }
    
    this.onClick = this.onClick.bind(this);
    this.insertNewEmotions = this.insertNewEmotions.bind(this);
  }
  onClick(e) {
    this.insertNewEmotions(this);
  }

  
  insertNewEmotions(e) {
    axios.post('/insert',
      querystring.stringify({
        tmemberemotion: tmemberemotion,
        teamsemotion: ''
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(function(response) {
      e.setState({
        messageFromServer: response.data
      });
    });
  }
handleImageChange(e) {
    if (e.target.id == "rad") {
      this.setState({
        tmemberemotion: e.target.id
      });
    }
if (e.target.id == "good") {
      this.setState({
        tmemberemotion: e.target.id
      });
    }
    if (e.target.id == "meh") {
      this.setState({
        tmemberemotion: e.target.id
      });
    }
    if (e.target.id == "bad") {
      this.setState({
        tmemberemotion: e.target.id
      });
    }
    if (e.target.id == "awful") {
      this.setState({
        tmemberemotion: e.target.id
      });
    }
  }
        render() {
    return (
      <div>
        
        <table>
               <tbody>
                 <td>
                  
                 </td>
                  <td className='desc-col'>
                  <tr><img src={logo} alt="logo" id="rad" className="img-circle" name="emotionimage" onClick="{handleImageChange}"/></tr>
                  <tr>Rad</tr>
                  </td>
                  <td className='desc-col'>
                  <tr><img src={logo} alt="logo" id="good" name="emotionimage" onClick="{handleImageChange}"/></tr>
                  <tr>Good</tr>
                  </td>
                  <td className='desc-col'>
                  <tr><img src={logo} alt="logo" id="meh" name="emotionimage" onClick="{handleImageChange}"/></tr>
                  <tr>Meh</tr>
                  </td>
                  <td className='desc-col'>
                  <tr><img src={logo} alt="logo" id="bad" name="emotionimage" onClick="{handleImageChange}"/></tr>
                  <tr>Bad</tr>
                  </td>
                  <td className='desc-col'>
                  <tr><img src={logo} alt="logo" id="awful" name="emotionimage" onClick="{handleImageChange}"/></tr>
                  <tr>Awful</tr>
                  </td>

                  <tr><input type="submit" class="btn btn-info" value="Submit Emotions" onClick="{this.onClick}"/></tr>
                                  
          </tbody>
        </table>
      </div>
    );
  }
}