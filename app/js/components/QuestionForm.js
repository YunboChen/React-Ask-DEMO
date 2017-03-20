var React=require('react');
var ReactDOM=require('react-dom');

module.exports=React.createClass({
	handleForm:function(e){
		e.preventDefault();
		if(!ReactDOM.findDOMNode(this.refs.title).value) {
			return alert('问题标题不能为空！')

		};
		var newQuestion={
			title:ReactDOM.findDOMNode(this.refs.title).value,
			description:ReactDOM.findDOMNode(this.refs.title).value,
			voteCount:0,
		}
		this.refs.addQuestionForm.reset();
		this.props.onNewQuestion(newQuestion);
	},
	render:function(){
		var styleObj={
			display:this.props.formDisplayed?'block':'none',
		}
		return(
				<form ref="addQuestionForm" name="addQuestion" style={styleObj} onSubmit={this.handleForm}>
					<div className="form-group">
						<label htmlFor="qtitle">问题</label>
						<input ref="title" type="text" className="form-control" id="qtitle" placeholder="你的问题标题" />
					</div>
					<textarea ref="decription" className="form-control" rows="3" placeholder="问题描述"></textarea>
					<button className="btn btn-success pull-right">确认</button>
					<button className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</button>
				</form>
		)
	}
})