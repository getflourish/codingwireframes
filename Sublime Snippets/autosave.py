import sublime, sublime_plugin

class AutoSaveCommand(sublime_plugin.EventListener):
    def on_modified(self, view):
        view.run_command('save')