import React from 'react'

export default function JournalEntry() {
	return (
		<div className='journal__entry pointer'>
			<div className='picture' style={{
backgroundSize:'cover',
backgroundImage:'url(https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500)'
			}}>

			</div>

			<div className='body'>
				<p className='title'>titulo</p>
				<p className='content'>  dingdnginigdngdingidgnidngdgn</p>
			</div>
			<div className='date-box'>
<span>

Monday
</span>
<h4>28</h4>
			</div>
		</div>
	)
}