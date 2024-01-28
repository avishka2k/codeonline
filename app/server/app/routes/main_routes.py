from . import main_bp

@main_bp.route('/')
def home():
    return 'Hello, Flak!'


