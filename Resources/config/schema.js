Schema = {
	sessions : {
			title:"string",
			description:"text",
			start_time:"datetime",
			end_time:"datetime",
			speaker_id: "integer",
			created_at:"datetime",
			updated_at:"datetime"
		},
		
		speakers : {
			name:"string",
			company: "string",
			bio:"text",
			created_at:"datetime",
			updated_at:"datetime"
		}	
}
