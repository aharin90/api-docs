require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

body = ModifyCallRecordingState.new
body.state = "paused"

call_id = "c-1234"

begin
    voice_client.modify_call_recording_state(ENV['BW_ACCOUNT_ID'], call_id, :body => body)
rescue APIException => e
    puts e.response_code
end