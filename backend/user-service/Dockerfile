FROM python:3.13-slim

WORKDIR /app

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /usr/local/bin/

# Copy dependency files
COPY pyproject.toml uv.lock* ./

# Install dependencies
RUN uv sync --frozen

# Copy application code
COPY app/ app/

EXPOSE 8003
CMD ["uv","run","uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8003"]
