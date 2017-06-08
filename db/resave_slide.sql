update slides
	set user_id = $1, slide_title = $2, g_info = $3, slide_content = $4, slide_date = $5
  where s_id = $6
